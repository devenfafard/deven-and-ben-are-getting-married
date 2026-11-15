using System.Reflection;
using Azure.Extensions.AspNetCore.Configuration.Secrets;
using beven.wedding.functions.Functions.Defcon;
using beven.wedding.functions.Infrastructure;
using beven.wedding.functions.Infrastructure.Email;
using beven.wedding.functions.Infrastructure.Security;
using beven.wedding.functions.Infrastructure.Storage;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FluentValidation;
using Serilog;
using Azure.Core.Diagnostics;
using System.Diagnostics.Tracing;

namespace beven.wedding.functions;

public static class Program
{
    public static async Task Main()
    {
        var diagPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "beven-startup.log");
        var diagLock = new object();
        void Diag(string msg) { lock (diagLock) File.AppendAllText(diagPath, $"{DateTime.Now:HH:mm:ss.fff} {msg}{Environment.NewLine}"); }

        using var azureLogs = new AzureEventSourceListener((e, msg) => Diag($"[{e.EventSource.Name}] {msg}"), EventLevel.Verbose);
        Diag("Main started");
        Log.Logger = new LoggerConfiguration().WriteTo.Console().CreateLogger();
        
        try
        {
            Log.Information("====== Started {AppTitle} ======", Constants.AppTitle);
            
            TaskScheduler.UnobservedTaskException += Handle_UnobservedTaskException;
            var host = BuildHost();
            
            Log.Information("Successfully built host! :)");
            
            await host.RunAsync();
        }
        catch (Exception exception)
        {
            Diag(exception.ToString());
            Log.Fatal(exception, "{AppTitle} terminated unexpectedly :( ", Constants.AppTitle);
        }
        finally
        {
            Log.Information("====== Stopped {AppTitle} ======", Constants.AppTitle);
            
            GC.Collect();
            GC.WaitForPendingFinalizers();

            await Log.CloseAndFlushAsync();
        }
    }

    private static void Handle_UnobservedTaskException(object? sender, UnobservedTaskExceptionEventArgs args)
    {
        Log.Error(args.Exception, "====== UNHANDLED TASK EXCEPTION ======");

        foreach (var innerException in args.Exception.Flatten().InnerExceptions)
        {
            Log.Error(innerException, "=== INNER UNHANDLED EXCEPTION ===");
        }
    }
    
    private static IHost BuildHost() =>
        Host.CreateDefaultBuilder()
            .ConfigureFunctionsWorkerDefaults()
            .ConfigureAppConfiguration((context, builder) =>
            {
                // Order matters!
                // Files must be added to the csproj!
                builder.AddJsonFile("appsettings.json")
                       .AddJsonFile("emailOptions.json");

                var credential = context.GetAzureCredential();
                var secret = builder.BuildKeyVaultSecretClient(credential);

                builder.AddAzureKeyVault(secret, new KeyVaultSecretManager());
            })
            .ConfigureServices(static (context, services) =>
            {
                services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly(), ServiceLifetime.Transient)
                    .AddSingleton(context.GetAzureCredential())
                    .AddInfrastructureServices()
                    .AddDefconServices();
                //.AddEmailServices(context.Configuration);
            })
            .Build();
}
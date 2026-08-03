using beven.wedding.functions.Functions.Defcon;
using beven.wedding.functions.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace beven.wedding.functions;

public static class Program
{
    public static async Task Main()
    {
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
            .ConfigureServices(static (context, services) =>
            {
                services.AddSingleton(context.GetAzureCredential())
                    .AddInfrastructureServices()
                    .AddDefconServices();
            })
            .Build();
}
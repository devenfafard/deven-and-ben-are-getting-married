using beven.wedding.functions.Functions.Safeguard;
using beven.wedding.functions.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Serilog;

namespace beven.wedding.functions;

public static class Program
{
    public static async Task Main()
    {
        // Build temp logger to catch errors on startup, then replace with logger built in .UseSerilog in BuildHost()
        Log.Logger = Logger.Configure().CreateBootstrapLogger();

        try
        {
            Log.Information("====== Started {AppTitle} ======", Constants.AppTitle);

            // Add handler to log unhandled exceptions
            TaskScheduler.UnobservedTaskException += Handle_UnobservedTaskException;

            var host = BuildHost();

            Log.Information("Successfully built host!");

            await host.RunAsync();
        }
        catch (OptionsValidationException exception) 
        {
            var failureMessages = exception.Failures.Any()
                ? exception.Failures
                : ["No validation error specified"];

            foreach (var failure in failureMessages)
            {
                Log.Fatal(exception, "{OptionsName}: {Failure}", exception.OptionsName, failure);
            }
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

    private static IHost BuildHost() =>
        Host.CreateDefaultBuilder()
            .ConfigureFunctionsWorkerDefaults()
            .ConfigureAppConfiguration(static (context, config) =>
            {
                var environment = context.HostingEnvironment;

                config.AddRequiredJsonFile("appsettings", environment);
                config.AddRequiredJsonFile("appsettings.Serilog", environment);
            })
            .ConfigureServices(static (context, services) =>
            {
                var configuration = context.Configuration;

                services.AddSafeguardServices(configuration);
            })
            .UseSerilog()
            .Build();

    private static void Handle_UnobservedTaskException(object? sender, UnobservedTaskExceptionEventArgs args)
    {
        Log.Error(args.Exception, "====== UNHANDLED TASK EXCEPTION ======");

        foreach (var innerException in args.Exception.Flatten().InnerExceptions)
        {
            Log.Error(innerException, "=== INNER UNHANDLED EXCEPTION ===");
        }
    }

    private static void AddRequiredJsonFile(this IConfigurationBuilder builder, string filename,
        IHostEnvironment environment)
    {
        var productionPath = $"{filename}{Constants.JSON_EXTENSION}";
        builder.AddJsonFile(productionPath, false);
        
        // Add non-prod app settings after prod so that non-prod settings only need to include what needs to be overwritten
        if (environment.IsDevelopment() is false)
        {
            var nonProductionPath = $"{filename}.{environment}{Constants.JSON_EXTENSION}";
            builder.AddJsonFile(nonProductionPath, false);
        }
    }
}
using System.Reflection;
using Microsoft.Extensions.Configuration;
using Serilog;

namespace beven.wedding.functions.Infrastructure;

public static class Logger
{
   private const string CONFIGURATION_FILE = "appsettings.Serilog";
   private const bool   REQUIRED           = false;

   public static LoggerConfiguration Configure()
   {
      var configuration = Constants.IsProduction
         ? new ConfigurationBuilder()
            .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? Constants.INVALID_STRING)
            .AddJsonFile($"{CONFIGURATION_FILE}.json", REQUIRED)
            .Build()
         : new ConfigurationBuilder()
            .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? Constants.INVALID_STRING)
            .AddJsonFile($"{CONFIGURATION_FILE}.json", REQUIRED)
            .AddJsonFile($"{CONFIGURATION_FILE}.{Constants.CurrentEnvironment}.json", REQUIRED)
            .Build();
      
      return new LoggerConfiguration().ReadFrom.Configuration(configuration);
   }
}
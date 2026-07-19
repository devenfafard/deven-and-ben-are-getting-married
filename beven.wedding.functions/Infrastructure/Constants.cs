using static System.Environment;

namespace beven.wedding.functions.Infrastructure;

public static class Constants
{
    public const int    START_OF_STREAM = 0;
    public const string INVALID_STRING  = "";
    
    public static IEnumerable<string> InvalidStringEnumerable => [];

    // Error messages
    public const string NO_SAFEGUARD_MESSAGE = "Cannot determine safeguard from request body";

    // Environment constants
    public static readonly string CurrentEnvironment = 
        GetEnvironmentVariable("AZURE_FUNCTIONS_ENVIRONMENT") ??
            throw new InvalidOperationException("Environment must be defined");
    
    public static bool IsProduction => CurrentEnvironment == "Production";
    
    // App constants
    public static string AppTitle => $"{nameof(beven)}.{nameof(wedding)}.{nameof(functions)}";
    
    // File extensions
    public const string JSON_EXTENSION = ".json";
}
using beven.wedding.functions.Domain.Person;
using beven.wedding.functions.Domain.Safeguard;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace beven.wedding.functions.Functions.Defcon;

public static class DefconServices
{
    private static IServiceCollection _services = null!;

    public static IServiceCollection AddDefconServices(this IServiceCollection services)
    {
        _services = services;
        
        AddValidators();
        AddRepositories();
        AddMappers();
        
        return services;
    }

    private static void AddValidators()
    {
        _services.AddTransient<SafeguardDtoValidator>();
    }

    private static void AddRepositories()
    {
        _services.AddTransient<PersonRepository>();
    }

    private static void AddMappers()
    {
        _services.AddTransient<PersonMapper>();
    }
}
using Azure.Identity;
using beven.wedding.functions.Infrastructure.Storage.Definitions;
using beven.wedding.functions.Infrastructure.Storage.TableStorageClientProvider;
using Microsoft.Extensions.DependencyInjection;

namespace beven.wedding.functions.Infrastructure;

public static class InfrastructureServices
{
    private static IServiceCollection _services = null!;
    
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        _services = services;

        AddTableService();
        
        return services;
    }

    private static void AddTableService()
    {
        _services.AddSingleton<ITableStorageClientProvider<PeopleDataTableName>,
                               TableStorageClientProvider<PeopleDataTableName>>(provider =>
        {
            
            var credential = provider.GetRequiredService<ChainedTokenCredential>();
            
            return new TableStorageClientProvider<PeopleDataTableName>(credential);
        });
    }
}
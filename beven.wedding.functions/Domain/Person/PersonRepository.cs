using Azure.Data.Tables;
using beven.wedding.functions.Infrastructure.Storage.Definitions;
using beven.wedding.functions.Infrastructure.Storage.TableStorageClientProvider;

namespace beven.wedding.functions.Domain.Person;

public class PersonRepository(ITableStorageClientProvider<PeopleDataTableName> client,
                              PersonMapper                                     mapper)
{
    private readonly TableClient _tableClient = client.GetTableOrThrow(PeopleDataTableName.InviteList);

    public async Task<IEnumerable<PersonData>> GetPeopleInGroupAsync(string groupAlias)
    {
        var results = new List<PersonEntity>();
        var queryResult = _tableClient.QueryAsync<PersonEntity>(e => e.GroupAlias == groupAlias);
        
        await foreach(var page in queryResult.AsPages())
        {
            results.AddRange(page.Values);
        }
        
        return results.Select(mapper.MapEntityToData);
    }
}
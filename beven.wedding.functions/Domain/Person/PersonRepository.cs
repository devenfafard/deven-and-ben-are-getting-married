using Azure.Data.Tables;
using beven.wedding.functions.Infrastructure.Storage;
using beven.wedding.functions.Infrastructure.Storage.Definitions;

namespace beven.wedding.functions.Domain.Person;

public class PersonRepository(TableStorageClientProvider<PeopleDataTableName> client,
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
    
    public async Task<IEnumerable<PersonData>> GetAll()
    {
        var results = new List<PersonEntity>();
        var queryResult = _tableClient.QueryAsync<PersonEntity>();
        
        await foreach(var page in queryResult.AsPages())
        {
            results.AddRange(page.Values);
        }
        
        return results.Select(mapper.MapEntityToData);
    }
}
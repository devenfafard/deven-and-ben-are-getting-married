using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading;
using Azure.Data.Tables;
using Azure.Identity;

namespace beven.wedding.functions.Infrastructure.Storage;

public class TableStorageClientProvider<TTableName> where TTableName : Enum
{
    private const string UrlFormat = "https://{0}.table.core.windows.net/";
    private const string StorageAccountName = "bwprodpeople";
    
    private readonly TableServiceClient                                  _tableServiceClient;
    private readonly ConcurrentDictionary<TTableName, Lazy<TableClient>> _tableClientsByName = new();
    
    public TableStorageClientProvider(ChainedTokenCredential credential)
    {
        var uri = new Uri(string.Format(UrlFormat, StorageAccountName));
        
        _tableServiceClient = new TableServiceClient(uri, credential);

        foreach (var alias in (TTableName[])Enum.GetValues(typeof(TTableName)))
        {
            Initialize(alias);
        }
    }
    
    private void Initialize(TTableName alias)
    {
        var name = alias.ToString();

        if (name.Any(static c => char.IsLetterOrDigit(c) is false))
        {
            throw new ArgumentException($"BABY GIRL WHAT IS YOU DOIN, table name '{name}' " +
                                        $"contains non-alphanumeric characters!");
        }

        _tableClientsByName.TryAdd(alias, 
            new Lazy<TableClient>(() => _tableServiceClient.GetTableClient(name), 
                LazyThreadSafetyMode.ExecutionAndPublication));
    }
    
    public TableClient GetTableOrThrow(TTableName alias)
    {
        var name = alias.ToString();

        if (_tableClientsByName.TryGetValue(alias, out var client) && client.IsValueCreated)
        {
            return client.Value;
        }

        return client?.Value ??
               throw new InvalidOperationException($"Failed to find table client for table '{name}'.");
    }
}
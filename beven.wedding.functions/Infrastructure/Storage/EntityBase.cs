using System.Text.Json.Serialization;
using Azure;
using Azure.Data.Tables;

namespace beven.wedding.functions.Infrastructure.Storage;

public abstract record EntityBase : ITableEntity
{
    [JsonIgnore] 
    public string PartitionKey { get; set; } = string.Empty;
    
    [JsonIgnore]
    public string RowKey { get; set; } = string.Empty;
    
    [JsonIgnore]
    public DateTimeOffset? Timestamp { get; set; }
    
    [JsonIgnore]
    public ETag ETag { get; set; }
}
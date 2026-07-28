using Azure.Data.Tables;

namespace beven.wedding.functions.Infrastructure.Storage.TableStorageClientProvider;

public interface ITableStorageClientProvider<in TEnum> where TEnum : Enum
{
    TableClient GetTableOrThrow(TEnum alias);
}
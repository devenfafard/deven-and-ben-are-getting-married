using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace beven.wedding.functions.Infrastructure.Common;

public interface INullableObject
{
    [JsonIgnore]
    [IgnoreDataMember]
    bool IsNullObject { get; }
    
    [JsonIgnore]
    [IgnoreDataMember]
    bool IsNotNullObject => !this.IsNullObject;
}
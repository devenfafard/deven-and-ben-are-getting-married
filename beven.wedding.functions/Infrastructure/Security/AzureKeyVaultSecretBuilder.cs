using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Microsoft.Extensions.Configuration;

namespace beven.wedding.functions.Infrastructure.Security;

public static class AzureKeyVaultSecretBuilder
{
    private const string KeyVaultKeyInAppSettings = "keyVault";
    private const string UrlFormat = "https://{0}.vault.azure.net/";
    
    public static SecretClient BuildKeyVaultSecretClient(this IConfigurationBuilder builder, 
                                                         ChainedTokenCredential credential)
    {
        var configuration = builder.Build();

        var name = configuration[KeyVaultKeyInAppSettings];

        var uri = new Uri(string.Format(UrlFormat, name));

        return new SecretClient(uri, credential);
    }
}
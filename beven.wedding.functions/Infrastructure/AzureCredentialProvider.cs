using Azure.Identity;
using Microsoft.Extensions.Hosting;

namespace beven.wedding.functions.Infrastructure;

public static class AzureCredentialProvider
{
    private static ChainedTokenCredential? _credential;

    public static ChainedTokenCredential GetAzureCredential(this HostBuilderContext context)
    {
        if (_credential is not null)
            return _credential;
        
        _credential = context.HostingEnvironment.IsDevelopment()
            ? new ChainedTokenCredential(new DefaultAzureCredential(), new AzureCliCredential(), new VisualStudioCredential())
            : new ChainedTokenCredential(new ManagedIdentityCredential(new ManagedIdentityCredentialOptions()));
        
        return _credential;
    }
}
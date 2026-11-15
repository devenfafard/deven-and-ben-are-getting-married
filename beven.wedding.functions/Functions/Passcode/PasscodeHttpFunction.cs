using System.Net;
using System.Text.Json;
using beven.wedding.functions.Domain.PasscodeRequest;
using beven.wedding.functions.Domain.Person;
using beven.wedding.functions.Infrastructure;
using beven.wedding.functions.Infrastructure.Api;
using beven.wedding.functions.Infrastructure.Email;
using beven.wedding.functions.Infrastructure.Email.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace beven.wedding.functions.Functions.Passcode;

public class PasscodeHttpFunction(
    ILogger<PasscodeHttpFunction> logger,
    PasscodeRequestDtoValidator validator,
    PersonRepository repository,
    EmailOperationClient client,
    EmailOptions options, EmailContentMapper mapper)
    : BaseController
{
    [Function(nameof(PasscodeHttpFunction))]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, WebRequestMethods.Http.Post, Route = nameof(Passcode))]
        HttpRequestData request)
    {
        /*using var memoryStream = new MemoryStream();

        await request.Body.CopyToAsync(memoryStream);

        memoryStream.Position = Constants.START_OF_STREAM;

        var deserializedPasscodeRequestDto = await JsonSerializer.DeserializeAsync<PasscodeRequestDto>(memoryStream);

        if (deserializedPasscodeRequestDto is null)
        {
            logger.LogWarning(Constants.INVALID_REQUEST_MESSAGE);

            return BadRequestResponse([Constants.INVALID_REQUEST_MESSAGE]);
        }

        var validationResult = await validator.ValidateAsync(deserializedPasscodeRequestDto);

        if (validationResult.IsValid is false)
            return BadRequestResponse(validationResult.Errors.Select(static e => e.ErrorMessage));
        var result = await repository.GetPersonByFullName(deserializedPasscodeRequestDto.FirstName,
            deserializedPasscodeRequestDto.LastName);
            */

        var email = mapper.CreatePasscodeEmailMessage();
        
        await client.SendAsync(email);
        
        return new OkResult();
    }
}
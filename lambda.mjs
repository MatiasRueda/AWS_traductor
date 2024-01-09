import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";

const client = new TranslateClient({});

export const handler = async (event) => {
  
  const command = new TranslateTextCommand({
    Text: event.texto,
    SourceLanguageCode: event.entrada,
    TargetLanguageCode: event.salida
  })
  
  const { TranslatedText } = await client.send(command);
  
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    traduccion: TranslatedText
  };
  return response;
};

import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Options = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Options[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openai
    .listModels()
    .then((response) => response.data.data);

  // const modelOptions = models.map(
  //   (model): Options => ({
  //     label: model.id,
  //     value: model.id,
  //   })
  // );

  const modelOptions = [
    { label: "davinci", value: "davinci" },
    { label: "text-davinci-001", value: "text-davinci-001" },
    { label: "text-davinci-002", value: "text-davinci-002" },
    { label: "text-davinci-003", value: "text-davinci-003" },
  ];

  res.status(200).json({ modelOptions });
}

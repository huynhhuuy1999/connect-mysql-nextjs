import excuteQuery from "@/db/db";

export default async (req?: any, res?: any) => {
  try {
    console.log("req nom", req.body);
    const result = await excuteQuery({
      query: "INSERT INTO post(content) VALUES(?)",
      values: [req.body.content],
    });
    console.log("ttt", result);
  } catch (error) {
    console.log(error);
  }
};

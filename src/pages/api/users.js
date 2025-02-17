import users from "@/app/data/user.json";
import { generatorSessionId } from "@/utility/gen";
import { writeFileSync } from "fs";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(500).json({ message: `${req.method} is not allowed` });
  }
  let { email, password } = JSON.parse(req.body);

  let usersList = users.users;

  //identification
  let iden_user = usersList.filter((user) => user.email == email);

  // authorization
  if (iden_user[0]) {
    if (iden_user[0].password == password) {
      let SessionID = await generatorSessionId(11);

      users.users[iden_user[0].id].SessionID = SessionID;

      writeFileSync("src/app/data/user.json", JSON.stringify(users, null, 2));

      res.status(200).send({ Sessionid: SessionID });
    } else {
      res.status(500).json({ message: "Неверные данные" });
    }
  } else {
    res.status(500).json({ message: "Аккаунта с таким email не существует" });
  }
}
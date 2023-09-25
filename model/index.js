const fs = require("fs");

const getUserDB = () => {
	const content = fs.readFileSync("users.json", "utf8");
	const users = JSON.parse(content);
	return users;
};

const postUserDB = (data, id) => {
	if (!data || !id) return "Данных нет";

	// var userName = req.body.name;
	// var userAge = req.body.age;
	// var user = { name: userName, age: userAge };

	// var data = fs.readFileSync('users.json', 'utf8');
	// var users = JSON.parse(data);

	// // находим максимальный id
	// var id = Math.max.apply(
	//     Math,
	//     users.map(function (o) {
	//         return o.id;
	//     })
	// );
	// // увеличиваем его на единицу
	// user.id = id + 1;
	// // добавляем пользователя в массив
	// users.push(user);
	// var data = JSON.stringify(users);
	// // перезаписываем файл с новыми данными
	// fs.writeFileSync('users.json', data);
	// res.send(user);
};

module.exports = { getUserDB, postUserDB };

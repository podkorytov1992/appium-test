const generateUserPhone = async () => {
    let randomPhone;

    randomPhone = '7987';

    for (let i = 0; i < 7; i++) {
        randomPhone = randomPhone.concat(Math.floor(Math.random() * 10));
    };

    return randomPhone;
};

const generateRandomUserData = async () => {
    const phone = await generateUserPhone();
    const email = `${phone}@zpemail.co`;
    const password = '123456';
    const randomUserData = {
        phone,
        email,
        password
    };

    return randomUserData;
};

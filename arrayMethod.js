const users = [
    { id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false },
    { id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true },
    { id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false },
    { id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true },
    { id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false },
    { id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true },
    { id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false },
    { id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false }
];

let premiumMembers = [];
let lastNames = [];
let fullNames = [];
let totalCountOfLogins = 0;
users.forEach(function (user) {
    if (user.firstName == 'Jose') {
        console.log(user);
    }
    if (user.isPremiumMember == true) {
        premiumMembers.push(user);
    }
    lastNames.push(user.lastName);
    if(user.logins > 10){
        fullNames.push(user.firstName + " " + user.lastName)
    }
    totalCountOfLogins += user.logins;
});


console.log(premiumMembers);
console.log(lastNames);
console.log(fullNames);
console.log(totalCountOfLogins);
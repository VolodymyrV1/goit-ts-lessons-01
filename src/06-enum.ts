interface User {
    name: string,
    age: number,
    role: "admin" | "user" | "super"
}

const user1: User = {
    name: "Dave",
    age: 25,
    role: "admin"
}

if (user1.role === "admin") {
    console.log("This is admin");    
}

enum Role {
    Admin,
    User,
    Super
}


const role: Role.Admin;
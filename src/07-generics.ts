interface User {
    name: string;
    age: number;
}


interface UserResponse {
    data: User[],
    meta: {
        total: number;
        page: number;
        limits: number;
    }

}

interface Order {
    id: number;
    price: number;
}

interface OrderResponse {
    data: Order[],
    meta: {
        total: number;
        page: number;
        limits: number;
    }

}




const users: User[] = [{name: "Dave", age: 25}];

const userResponse: UserResponse = {
    data: users,
    meta: {
        total: 100,
        page: 1,
        limits: 1
    }

}


interface ApiResponse<T> {
    data: T[],
    meta: {
        total: number;
        page: number;
        limits: number;
    }
}

const orders: Order[] = [{id: 1, price: 100}]

const orderResponse: ApiResponse<Order> = {
    data: orders,
    meta: {
        total: 100,
        page: 1,
        limits: 1
    }
}

const useresponse: ApiResponse<User> = {
    data: users,
    meta: {
        total: 100,
        page: 1,
        limits: 1
    }
}



function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(['cat', 'dog', 'frog']);


interface Car {
    model: string,
    price: number
}

const cars: Car[] = [
  {
    model: "BMW",
    price: 50000,
  },
  {
    model: "KIA",
    price: 33000,
  },
  {
    model: "Bentley",
    price: 350000,
  },
  {
    model: "MINI",
    price: 55000,
  },
];


function max<T>(arr: T[], selector: (arg: T) => number): T {
    return arr.reduce((prev, curr) => {
        console.log(prev, curr, selector(curr));
        
        return selector(curr) > selector(prev) ? curr : prev;
    });
}

max(cars, (car) => car.price)


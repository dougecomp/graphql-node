const users = [
    {id:1,name:"Douglas",email:"douglas@douglas.com.br"},
    {id:2,name:"Carlos",email:"carlos@carlos.com.br"},
    {id:3,name:"João",email:"joao@joao.com.br"},
]
module.exports = {
    Query: {
        users: () => {
            return users;
        },
        user: (_, {id}) => {
            let foundUser = users.find((user) => {                
                return user.id == id;
            });
            
            return foundUser;
            
        }
    },

    Mutation: {
        createUser: (_,{name, email}) => {
            return {id:999999,name,email};
        },
        editUser: (_,{}) => {
            
        }
    }
}
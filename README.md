# FrontVueAPI
Front de del vue para el consumo de una api



    fetchUserInformation = async () => {
            const token = await AsyncStorage.getItem('id_token')
            console.log(token)
            const response = await fetch('http://192.168.0.025:8888/api/user', {
                method: 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '. token
                }
            });
            const user = await response.json();
            console.log(user)
        }

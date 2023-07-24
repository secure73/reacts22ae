import ApiService from "./HttpService";
const APIList = [{name:"default",address:"https://dummyjson.com/"}];

function findApiByName(xname) {
    return APIList.find((element) => {
        if(xname === '')
        {
            xname = "default";
        }
        return element.name === xname;
    })
}
const DynamicService = {

    post: async ( apiController, apiMethod = 'get', Id = '', payload, apiName = '') => {
        let { apiAddress } = findApiByName(apiName);
        let apiToCall = apiAddress;
        if (Id) {
            apiToCall = apiAddress + apiController + '/' + Id;
        }
        //console.log("apiRequest:", apiToCall);
        try {
            let data = "";
            console.log(payload);
            if(apiMethod  === 'get') {
                await ApiService.get(apiToCall, payload).then((response) => response.data);
                return data;
            }
            if(apiMethod === 'post') {
                await ApiService.post(apiToCall, payload).then((response) => response.data);
                return data;
            }
            if(apiMethod === 'delete'){
                await ApiService.delete(apiToCall, payload).then((response) => response.data);
                return data;
            }
            if(apiMethod ==='put')
            {
                await ApiService.put(apiToCall, payload).then((response) => response.data);
                return data;
            }
            
        } catch (ex) {
            return false
        }
    }

}

export default DynamicService
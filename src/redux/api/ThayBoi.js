import { API } from "./common";

const getHeader = token => ({
    header: { Authorization: `access_token ${token}` }
});
export default {
    getThayBoi: (token) => {
        return API.get("api/v1/list/field=avgStar&sort=good&page=1",{});
    },
    getFTDetail:(token)=>{
        
    }
}
// giới tính
// giá 
// thời gian làm việc ?? 
//địa điểm làm việc 
// tuổi 
// số năm kinh nghiệm
import ThayboiModel from '../../models/thayboi.model';
import { filterThayBoi, filterGender, filterSchedule, filterLocation } from './index';
export default [
    // gioi tinh 
    {
        method: "GET",
        path: "/api/v1/filter/gender={value}&page={page}",
        options: {
            auth: false
        },
        handler: async function(request, h) {

            const page = parseInt(request.params.page);
            const value = parseInt(request.params.value);
            return await filterGender("information.gender", value, page, h)

        }
    },
    // tìm kiếm theo giờ làm 
    {
        method: "GET",
        path: "/api/v1/filter/schedule/open={open}&close={close}&page={page}",
        handler: async function(request, h) {

            var open = parseInt(request.params.open);
            var close = parseInt(request.params.close);
            const page = parseInt(request.params.page);
            return await filterSchedule(open, close, page, h)


        },
        options: {
            auth: false
        }
    },
    // tìm kiếm theo địa điểm 
    {
        method: "GET",
        path: "/api/v1/filter/location/ward={ward?}&district={district?}&province={province?}&region={region?}$page={page}",
        handler: async function(request, h) {
            var ward = request.params.ward;
            var district = request.params.district;
            var province = request.params.province;
            var region = request.params.region;
            const page = parseInt(request.params.page);
            return filterLocation({ ward, district, province, region }, page, h);
        },
        options: {
            auth: false
        }
    },
    // tìm kiếm theo giá 
    {
        method: "GET",
        path: "/api/v1/filter/fee/skill={skill}&min={min}&max={max}&page={page}",
        handler: async function(request, h) {
            var skill = request.params.skill;
            var field = `contact.fee.${skill}`;
            var min = parseInt(request.params.min);
            var max = parseInt(request.params.max);
            var page = parseInt(request.params.page)
            return await filterThayBoi(field, min, max, page, h)

        },
        options: {
            auth: false
        }

    },
    // tìm kiếm theo tuổi 
    {
        method: "GET",
        path: "/api/v1/filter/age/min={min}&max={max}&page={page}",
        config: {
            auth: false
        },
        handler: async function(request, h) {
            var min = parseInt(request.params.min);
            var max = parseInt(request.params.max);
            var page = parseInt(request.params.page);
            var field = "information.age";
            return await filterThayBoi(field, min, max, page, h)
        }
    },
]
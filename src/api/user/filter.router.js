// giới tính
// giá 
// thời gian làm việc ?? 
//địa điểm làm việc 
// tuổi 
// số năm kinh nghiệm
import ThayboiModel from '../../models/thayboi.model';

export default [
    // gioi tinh 
    {
        method: "GET",
        path: "/api/v1/filter/gender={value}&page={page}",
        options: {
            auth: false
        },
        handler: async function(request, h) {
            const tota = await ThayboiModel.find({}).countDocuments();
            const data = await ThayboiModel.find({ "information.gender": parseInt(request.params.value) });
            return h.response(data);
        }
    }

]
import {
  GET_DETAIL_FORTUNETELLER_EVALUATE,
  GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS,
  GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE
} from "../action/constants";
const defaultState = {
  getData: {
    id: "",
    page: ""
  },
  receviedData: [
    {
      error: null,
      data: {
        information: {
          degree: ["HUS", "UOU"],
          skill: ["xem bói", "gọi hồn"],
          name: "Hồ Ngọc Hà",
          picture: "https://img-9gag-fun.9cache.com/photo/a1Rm138_460swp.webp",
          gender: 0,
          date_of_birth: "1997-03-09",
          age: 32,
          introduction: "Sinh ra và lớn lên trong 1 gia đính bla bla"
        },
        contact: {
          media: {
            youtube: "https://www.youtube.com/watch?v=_pgjLLSo8yM",
            website: "pornhub.com",
            facebook: "facebook.com"
          },
          schedule: {
            open: "7",
            close: "19"
          },
          work_address: [
            {
              raw: {
                ward: "Tán Thuật",
                district: "Kiến Xương",
                province: "Thái Bình",
                region: "Bắc",
                ggmap: {
                  longtitude: "105.8172996",
                  latitude: "20.9990269"
                }
              },
              detail: "số nhà xx , khu yyy ..."
            }
          ],
          home_address: [
            {
              raw: {
                ward: "Tán Thuật",
                district: "Kiến Xương",
                province: "Thái Bình",
                region: "Bắc",
                ggmap: {
                  longtitude: "105.8172996",
                  latitude: "20.9990269"
                }
              },
              detail: "số nhà xx , khu yyy ..."
            }
          ],
          fee: [
            {
              hau_dong: 1000000
            },
            {
              soi_can: 200000
            }
          ],
          phone: ["+84999999999"]
        },
        _id: "5ddf93d079e5554088100d02",
        verification: true,
        created_at: "2019-11-28T09:30:56.016Z",
        updated_at: "2019-11-28T09:30:56.016Z",
        __v: 0,
        rate: [
          {
            user: {
              id_user: "5de0810b443fe31d6c0b74f9",
              name: "Hoang  Anh",
              picture:
                "https://img-9gag-fun.9cache.com/photo/an57z0n_460swp.webp"
            },
            detail: [
              {
                que_dich: 5
              },
              {
                boi_bai: 2
              },
              {
                xem_boi: 2
              },
              {
                goi_hon: 2
              },
              {
                chiem_tinh: 2
              }
            ],
            _id: "5de0cf68de19500540c77f35",
            content: "alo alo",
            id_thayboi: "5ddf93d079e5554088100d02",
            created_at: "2019-11-29T07:57:28.606Z",
            updated_at: "2019-11-29T07:57:28.607Z",
            __v: 0,
            comment: [
              {
                user: {
                  id_user: "5de0810b443fe31d6c0b74f9",
                  name: "Hoang Duc Anh"
                },
                _id: "5de14f847c9fce29acc19790",
                content: "dsad2 r4 g8 djiqowd",
                id_rate: "5de0cf68de19500540c77f35",
                created_at: "2019-11-29T17:04:04.954Z",
                updated_at: "2019-11-29T17:04:04.954Z",
                __v: 0,
                reaction: []
              },
              {
                user: {
                  id_user: "5de0810b443fe31d6c0b74f9",
                  name: "Hoang Duc Anh"
                },
                _id: "5de14f8f7c9fce29acc19791",
                content: "alo alo??",
                id_rate: "5de0cf68de19500540c77f35",
                created_at: "2019-11-29T17:04:15.912Z",
                updated_at: "2019-11-29T17:04:15.912Z",
                __v: 0,
                reaction: []
              },
              {
                user: {
                  id_user: "5de0810b443fe31d6c0b74f9",
                  name: "Hoang Duc Anh"
                },
                _id: "5de14f9d7c9fce29acc19792",
                content: "gáy nữa đi nào bạn eey!",
                id_rate: "5de0cf68de19500540c77f35",
                created_at: "2019-11-29T17:04:29.094Z",
                updated_at: "2019-11-29T17:04:29.094Z",
                __v: 0,
                reaction: []
              }
            ],
            reaction: []
          }
        ],
        average: [
          {
            _id: {
              id_thayboi: "5ddf93d079e5554088100d02"
            },
            rates: [
              {
                "que_dich": {
                  name: "Quẻ Dịch",
                  avg: null,
                  total: null
                }
              },
              {
                "boi_bai": {
                  name: "Bói Bài",
                  avg: 5,
                  total: 5
                }
              },
              {
                "xem_boi": {
                  name: "Xem Bói",
                  avg: 2.5,
                  total: 2
                }
              },
              {
                "goi_hon": {
                  name: "Gọi Hồn",
                  avg: 2,
                  total: 2
                }
              },
              {
                "chiem_tinh": {
                  name: "Chiêm Tinh",
                  avg: null,
                  total: null
                }
              },
              {
                total: 9
              }
            ]
          }
        ]
      },
      page: 1,
      pageSize: 1,
      totalPage: 2
    }
  ],
  error: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_FORTUNETELLER_EVALUATE: {
      return {
        ...state,
        getData: {
          id: payload.id,
          page: payload.page
        }
      };
    }
    case GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS: {
      return {
        ...state,
        receviedData: payload
      };
    }
    case GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE: {
      return {
        ...state,
        receviedData: [],
        error: true
      };
    }
    default:
      return state;
  }
};



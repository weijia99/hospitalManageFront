import request from '@/utils/request'

// 导入封装的axios

export default {
    // 定义方法  
    getHospSetList(current,limit,searchObj){
        // 使用ajax发送请求
        return request ({
            url:`/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
            method:'post',
            data:searchObj
        })
        // z=直接回调
    },
    deleteHospSet(id){
        return request ({
            url: `/admin/hosp/hospitalSet/${id}`,
            method: 'delete'
          })
        
    }
}
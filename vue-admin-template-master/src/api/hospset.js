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
        
    },
    // 批量删除
    batchHospSet(idList){
        return request({
            url: `/admin/hosp/hospitalSet/batchRemoveHospitalSet`,
            method: 'delete',
            data:idList
        })
    },
    //锁定和取消锁定
    lockHospSet(id,status) {
        return request ({
            url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
            method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  getHospSet(id){
      return request({
        url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
        method: 'get',
      })
  },
  updateHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }


  
}
import request from '@/utils/request'

export default {
    updateStatus(id, status) {
        return request({
          url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`,
          method: 'get'
        })
      },
    
  //医院列表
  getPageList(current,limit,searchObj) {
    return request ({
      url: `/admin/hosp/hospital/list/${current}/${limit}`,
      method: 'get',
      params: searchObj  
    })
  },
  //查询dictCode查询下级数据字典
  findByDictCode(dictCode) {
    return request({
        url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
        method: 'get'
      })
    },
  
  //根据id查询下级数据字典
  findChildData(dictCode) {
    return request({
        url: `/admin/cmn/dict/findChildData/${dictCode}`,
        method: 'get'
      })
  },
  //查看医院详情
    getHospById(id) {
        return request ({
            url: `/admin/hosp/hospital/showHospDetail/${id}`,
            method: 'get'
    })
  },
  
  getDeptByHoscode(hoscode) {
    return request ({
        url: `/admin/hosp/department/getDeptList/${hoscode}`,
        method: 'get'
})
}
  
}

import axiosInstance from './axios';

interface MonthWorks {
  year: number;
  month: number;
}

// 산책 시작 함수
const startWalk = async (JSON: string) => {
  try {
    const { data } = await axiosInstance.post(`/explorations`, JSON, {
      headers: {
        'Content-Type': `application/json; charset=utf8`,
      },
    });
    return data;
  } catch (error) {
    console.error('[FAIL] postStartWalk :', error);
    throw error;
  }
};

// 산책 종료 함수
const exitWalk = async (explorationId: number) => {
  try {
    const { data } = await axiosInstance.patch(`/explorations/${explorationId}`, {
      headers: {
        'Content-Type': `application/json; charset=utf8`,
      },
    });
    return data;
  } catch (error) {
    console.error('[FAIL] patchExitWalk :', error);
    throw error;
  }
};

// 월간 산책 기록 목록 조회 함수
const getMonthWalks = async (year: number, month: number) => {
  try {
    const { data } = await axiosInstance.get(`/explorations`, {
      params: {
        year: year,
        month: month,
      } as MonthWorks,
    });
    return data;
  } catch (error) {
    console.error('[FAIL] getMonthWalks :', error);
    throw error;
  }
};

// 월간 산책 통계 조회 함수
const getStatistics = async (year: number, month: number) => {
  try {
    const { data } = await axiosInstance.get(`/explorations/statistics`, {
      params: {
        year: year,
        month: month,
      } as MonthWorks,
    });
    return data;
  } catch (error) {
    console.error('[FAIL] getStatistics :', error);
    throw error;
  }
};

// 일간 산책 기록 목록 조회 함수
const getDayWalks = async (date: string) => {
  try {
    const { data } = await axiosInstance.get(`/explorations/days`, {
      params: {
        date: date,
      },
    });
    return data;
  } catch (error) {
    console.error('[FAIL] getDayWalks :', error);
    throw error;
  }
};

// 산책 기록 상세 조회 함수
const getWalkDetail = async (explorationId: number) => {
  try {
    const { data } = await axiosInstance.get(`/explorations/${explorationId}`);
    return data;
  } catch (error) {
    console.error('[FAIL] getWalkDetail :', error);
    throw error;
  }
};

export { startWalk, exitWalk, getMonthWalks, getDayWalks, getStatistics, getWalkDetail };

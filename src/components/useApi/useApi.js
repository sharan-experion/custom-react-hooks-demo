import React from "react";
import useApi from "../../hooks/useApi";
import { useEffectOnce } from '../../hooks/useEffectOnce';
import commonService from "../../services/commonService";

const MyApp = () => {
  const fetchUser = useApi(commonService.fetchUsers);

  const doFetch = async () => {
    const { data } = await fetchUser.request();
    console.log(data);
  };

  useEffectOnce(() => {
    doFetch();
  }, []);

  return <></>;
};

export default MyApp;

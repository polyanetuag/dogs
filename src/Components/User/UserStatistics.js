import React from "react";
import useFetch from "../../Hooks/useFetch";
import Head from "../Helper/Head";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatisticsGraphs from "./UserStatisticsGraphs";

const UserStatistics = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return <Loading />;
  if(error) return <Error />;
  if(data)
  return (
    <div>
      <Head title="Estatísticas" />
     <UserStatisticsGraphs data={data} />
    </div>
  );
  else return null;
};

export default UserStatistics;

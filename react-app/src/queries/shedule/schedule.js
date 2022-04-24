import gql from "graphql-tag";

const SHEDULE_QUERY = gql`
  query Shedule($class_num: String!) {
        schedules(filters:{schedule_class:{class_num:{eq:$class_num}}}, pagination:{start:0, limit:100}){
            data{
            attributes{
                schedule_day{
                    data{
                        attributes{
                            name
                        }
                    }
                }
                schedule_time{
                    data{
                        attributes{
                            class_time
                        }
                    }
                }
                schedule_class{
                    data{
                        attributes{
                            class_num
                        }
                    }
                }
                schedule_usrNum
                schedule_isFull
            }
            }
        }
    }
`;

export default SHEDULE_QUERY;
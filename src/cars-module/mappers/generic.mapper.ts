
export interface Mapper<T,TDTO>{
     toDTO(t: T):TDTO;
     fromDTO(tDTO: TDTO):T;
}
export interface ISystem {
    mobile_system: string,
    processor: string,
    processor_model: string,
    kernels: number,
    ram: number,
    rom: number
}

export interface IConnection {
    sim: number,
    three_g: number,
    lte: number,
    sim_format: string
}

export interface ICommon_params {
    producer: string,
    model: string,
    smartphone_series: string
}

export interface ICamera {
    mpx_core: number,
    mpx_second: number,
    autofocus: number,
    flash: number
}

export interface IPhone {
    good_id: number,
    name: string,
    cost: number,
    url?: string
}

// export interface Images {
//     [index: number]: { url: string; };
// }

// export interface Image {
//     images: Array<{
//         url: string
//     }>
// }

export interface Images {
    url: string;
}

type ImagesArr = Images[];

export interface IPhoneItem {
    info: IPhone,
    system: ISystem,
    connection: IConnection,
    common_params: ICommon_params,
    camera: ICamera,
    // images: Array<{
    //     url: string
    // }>
    images: Images[]
}
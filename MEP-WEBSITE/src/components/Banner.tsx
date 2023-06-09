import frufru from '../assets/frufru.png'

type BannerProps = {
    image: string;
    title: string;
    content: string;
};

const Banner = (banner: BannerProps) => {
    return (
        <div className="trpBox-box flex flex-col gap-2 customShadow">
            <div className="gap-2">
                <img
                    src={banner.image}
                    alt="Business"
                />
            </div>
            <img
                className="w-[200px] absolute right-0 top-[280px]"
                src={frufru}
                alt="frufru"
            />
            <img
                src={frufru}
                alt="frufru"
                className="w-[200px] absolute left-0 top-[450px] rotate-180"
            />
            <span className="text-mainGreenAqua">{banner.title}</span>
            <p className="box-250 minimunBlue line-h-30">{banner.content}</p>
        </div>
    );
};

export default Banner;

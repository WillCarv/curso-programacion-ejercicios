import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK = (number) => {
    if(number >= 10000) {
        number = number / 1000;
        return `${number}k`;
    } else {
        return number;
    }
}


export const OverviewContainer = () => {

    return(
        <section className='max-w-[1440px] flex flex-wrap absolute top-[191px] left-0 right-0 
        gap-[30px] place-content-center mx-auto'>
            {
                data.overview.map(Object => 
                    <OverviewCard 
                        key={Object.id} 
                        user={Object.user}
                        audienceType={(Object.audienceType)}
                        audience={convertNumberToK(Object.audience)}
                        network={Object.network}
                        isUp={Object.isUp}
                        today={Object.today}
                    />
                )
            }
        </section>
    )
}


export const OverviewTodayContainer = () => {
    return(
        <section>
            <h2 className='text-2xl font-bold mb-27px text-Dark-Grayish-Blue ml-[32px]'>Overview Today</h2>
            <div className='flex flex-wrap'>
            {
                data['overview-today'].map(Object => 
                    <OverviewTodayCard 
                    key={Object.id}
                    network={Object.network}
                    statsType={Object.statsType}
                    stats={convertNumberToK(Object.stats)}
                    porcentage={Object.porcentage}
                    isUp={Object.isUp}    
                    />
                )
            }
            </div>
        </section>
    )
}
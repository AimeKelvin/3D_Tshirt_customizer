import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/config/motion';



const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='./public/logos/VTLogo.png'
              alt="logo"
              className="w-12 h-12 object-contain" 
            
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                VIRTUAL <br className="xl:block hidden" />{" "}{" "}TAILOR
              </h1>
              
            </motion.div>

            <motion.div
              {...headContainerAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-grey-600 text-base">
                Create your unique and exclusive shirt with my brand-new 3D customization tool. <strong>
                Unleash your imagination </strong> {" "} and define your own style with <strong>{" "}<a href="https://chroste.com">Chrosta Labs</a></strong>.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
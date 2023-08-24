import { ImageBackground } from 'react-native';
import backgound from '../assets/background.jpg';

interface Props {
    children: React.ReactNode
}

export function Backgound({ children }: Props) {
    return (
        <ImageBackground
            source={backgound}
            defaultSource={backgound}>
            {children}
        </ImageBackground>
    );
}
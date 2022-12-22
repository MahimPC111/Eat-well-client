import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function MyComponent({ img }) {
    return (
        <PhotoProvider>
            <div className="foo">
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </div>
        </PhotoProvider>
    );
}
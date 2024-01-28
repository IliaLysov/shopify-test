import { useEffect, useRef } from "react";
import { Product } from "../../types/product";
import parse from 'html-react-parser'
import style from './product.module.css'



export default function ProductItem(product: Product) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const html = parse(product.bodyHtml);
    const elementsToRender = Array.isArray(html) ? html.slice(0, 3) : [html];

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
    
        const img = new Image();
        img.src = product.imageSrc;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0, img.width, img.height);
        }
    })

    return (
        <li className={style['wrapper']}>
            <canvas ref={canvasRef} className={style['image']}></canvas>
            {elementsToRender}
        </li>
    )
}
import { NextResponse } from 'next/server';
import path from 'path';
import { readFileSync } from 'fs';

export async function GET() {
        const filePath = path.join(process.cwd(), 'public', 'aulas-youtube', '1', 'compose.yaml');
        const yamlData = readFileSync(filePath, 'utf8');

        return new NextResponse(yamlData, {
        headers: { 'Content-Type': 'text/yaml', 
                'content-disposition': 'attachment; filename="compose.yaml'
        },

        });  
}
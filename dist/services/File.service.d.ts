import Service from "../Service";
declare class FileService extends Service {
    private static getSignedUrl;
    private static uploadFileToSignedUrl;
    private static getFileExtension;
    private static generateFileName;
    static upload(file: File): Promise<string>;
}
export default FileService;

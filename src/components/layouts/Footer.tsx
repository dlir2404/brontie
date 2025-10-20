import FacebookSvg from '@/assets/icons/facebook.svg';
import InstagramSvg from '@/assets/icons/instagram.svg';
import TwitterSvg from '@/assets/icons/twitter.svg';

export const Footer = () => {
    return (
        <footer className="bg-[#111827] text-text-main py-16 px-28">
            <div className="flex justify-between items-start gap-8 mb-12">
                <div className="flex-1">
                    <img
                        src="./images/all-assets.png"
                        alt="Logo"
                        className="w-[118px] h-[40px] object-cover object-[-8px_-6px] mb-6"
                    />
                    <div className="text-text-main text-[16px] font-[400] mb-6">Ireland's first community-driven café gifting platform. Connecting people through the simple joy of sending coffee gifts while supporting local businesses.</div>
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2937]">
                            <FacebookSvg />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2937]">
                            <InstagramSvg />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2937]">
                            <TwitterSvg />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex gap-8">
                    <div className="flex-1">
                        <div className='font-[600] text-[18px] mb-4 text-white'>For Cafés</div>

                        <div className='mb-2 text-[16px] font-[400] text-text-main flex flex-col gap-[6px] items-start'>
                            <p>How It Works</p>
                            <p>Benefits</p>
                            <p>Pricing</p>
                            <p>Support</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className='font-[600] text-[18px] mb-4 text-white'>Company</div>

                        <div className='mb-2 text-[16px] font-[400] text-text-main flex flex-col gap-[6px] items-start'>
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-t-[#1F2937] pt-[33px]'>
                <div className="flex justify-between">
                    <p>© 2024 Brontie. All rights reserved.</p>
                    <p>Made with ☕ in Ireland</p>
                </div>
            </div>
        </footer>
    )
}
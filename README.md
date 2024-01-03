## Overview web3 and blockchain

## DApp:

`DApp` viết tắt của "Decentralized Application" (Ứng dụng Phi tập trung). Đây là một loại ứng dụng mà hệ thống và dữ liệu của nó được triển khai trên blockchain, thường là một mạng lưới blockchain như Ethereum. DApp sử dụng lợi ích của công nghệ blockchain để tạo ra một mô hình phi tập trung, trong đó dữ liệu không nằm ở một trung tâm duy nhất mà được phân phối trên nhiều nút trên mạng

`Một số đặc điểm chính của DApp bao gồm`:

`Phi Tập Trung (Decentralization)`: Dữ liệu và logic của ứng dụng được phân tán trên nhiều nút của mạng blockchain, giúp giảm thiểu rủi ro tập trung và làm cho hệ thống trở nên không dễ tấn công.

`Smart Contracts`: DApp thường sử dụng smart contracts (hợp đồng thông minh), đó là các đoạn mã tự thực hiện các điều khoản của hợp đồng mà không cần bên thứ ba.

`Token và Cryptocurrency`: Một số DApp có sử dụng token hoặc cryptocurrency để thực hiện giao dịch và chia sẻ giá trị giữa các thành viên trong mạng.

`Môi Trường Phi Tập Trung`: DApp thường cung cấp một môi trường phi tập trung cho người dùng, trong đó họ có quyền kiểm soát dữ liệu cá nhân và tài sản số của mình.

`Open Source`: Nhiều DApp được phát triển và duy trì như một dự án mã nguồn mở, giúp cộng đồng đóng góp vào sự phát triển và cải thiện của ứng dụng.

## Window.ethereum:

`Window.ethereum` là một đối tượng trong JavaScript, thường được sử dụng để tương tác với blockchain Ethereum từ trình duyệt.

window.ethereum thường có các thuộc tính và phương thức sau:

`ethereum.request`: Một phương thức để gửi các yêu cầu đến MetaMask hoặc trình duyệt có tích hợp ví.

`ethereum.on`: Một phương thức để đăng ký lắng nghe sự kiện, chẳng hạn như sự kiện khi tài khoản thay đổi.

`ethereum.selectedAddress`: Địa chỉ ví được chọn hiện tại.

`Lưu ý`:
window.ethereum hoạt động khi Extensions trong google có add MetaMask hoặc có loại ví điện tử vào , nếu chưa có loại ví điện tử nào thì window.ethereum sẽ không hoạt động.

## Network trong MetaMask : 

có 2 loại mạng đó là `Mainnet` và `Testnet` : 

- `Mạng Mainnet` là mạng chính thức của blockchain, nơi mà các giao dịch và các hợp đồng thông minh được thực hiện với giá trị thực

- `Testnet` là môi trường mà nhà phát triển và người kiểm thử có thể triển khai và thử nghiệm ứng dụng của họ mà không cần sử dụng tiền thật
Khi connect wallet sẽ có các loại mạng khác nhau , tuỳ vào mục đích sử dụng , ta sẽ chọn loại mạng phù hợp

`Lưu ý`: 
- Mỗi mạng sẽ có 1 chainId và New RPC URL để phân biệt nhau
- New RPC URL là đường dẫn giúp tương tác với loại mạng cũng giống như đường dẫn server dùng để tương tác với api 



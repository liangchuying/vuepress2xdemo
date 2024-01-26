import{_ as n,o as s,c as a,b as e}from"./app-xyvm7-4C.js";const i={},p=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token comment">#测试nginx配置文件是否正确</span>
nginx -t

<span class="token comment">#修改配置后重新加载生效</span>
nginx -s reload 

<span class="token comment">#4.查看防火墙状态 </span>
systemctl status firewalld

<span class="token comment">#5.开启防火墙 </span>
systemctl start firewalld  

<span class="token comment">#6.关闭防火墙 </span>
systemctl stop firewalld

<span class="token comment">#查看开放的端口号</span>
firewall-cmd --list-all  

<span class="token comment">#开放8000端口</span>
sudo firewall-cmd --add-port=8000/tcp --permanent 

<span class="token comment">#重载入添加的端口：</span>
firewall-cmd --reload

<span class="token comment">#移除指定端口： sucess 表示成功</span>
firewall-cmd --permanent --remove-port=123/

<span class="token comment">#查询指定端口是否开启成功：</span>
firewall-cmd --query-port=123/tcp <span class="token comment">#yes:表示开启 no:表示未开启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟serve-配置文件" tabindex="-1"><a class="header-anchor" href="#虚拟serve-配置文件" aria-hidden="true">#</a> 虚拟serve 配置文件</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">## 配置反向代理的参数</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">8080</span></span><span class="token punctuation">;</span> <span class="token comment"># 监听的端口</span>
    <span class="token directive"><span class="token keyword">server_name</span> xx_domain <span class="token comment">#访问的域名 </span>

    <span class="token comment">## 1. 用户访问 http://xx_domain，则反向代理到 https://github.com</span>
    location /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>  https://github.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>     <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>   Host             <span class="token variable">$host</span></span><span class="token punctuation">;</span>        <span class="token comment"># 传递域名</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Real-IP        <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> <span class="token comment"># 传递ip</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Scheme         <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>      <span class="token comment"># 传递协议</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e</span><span class="token punctuation">;</span>
    <span class="token comment"># Other proxy settings if needed</span>
    
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span> 
<span class="token comment">#            proxy_set_header X-Real-IP $remote_addr;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>  
    <span class="token comment">#ip为后端服务地址</span>
        
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx配置参数中文详细说明" tabindex="-1"><a class="header-anchor" href="#nginx配置参数中文详细说明" aria-hidden="true">#</a> Nginx配置参数中文详细说明：</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#定义Nginx运行的用户和用户组</span>
<span class="token directive"><span class="token keyword">user</span> www www</span><span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment">#nginx进程数,建议设置为等于CPU总核心数.</span>
<span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment">#全局错误日志定义类型,[ debug | info | notice | warn | error | crit ]</span>
<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log info</span><span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment">#进程文件</span>
<span class="token directive"><span class="token keyword">pid</span> /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment">#一个nginx进程打开的最多文件描述符数目,理论值应该是最多打开文件数（系统的值ulimit -n）与nginx进程数相除,但是nginx分配请求并不均匀,所以建议与ulimit -n的值保持一致.</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment">#工作模式与连接数上限</span>
<span class="token directive"><span class="token keyword">events</span></span>
<span class="token punctuation">{</span>
<span class="token comment">#参考事件模型,use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型,如果跑在FreeBSD上面,就用kqueue模型.</span>
<span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
<span class="token comment">#单个进程最大连接数（最大连接数=连接数*进程数）</span>
<span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#</span>
<span class="token comment">#设定http服务器</span>
<span class="token directive"><span class="token keyword">http</span></span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">include</span> mime.types</span><span class="token punctuation">;</span> <span class="token comment">#文件扩展名与文件类型映射表</span>
<span class="token directive"><span class="token keyword">default_type</span> application/octet-stream</span><span class="token punctuation">;</span> <span class="token comment">#默认文件类型</span>
<span class="token comment">#charset utf-8; #默认编码</span>
<span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">128</span></span><span class="token punctuation">;</span> <span class="token comment">#服务器名字的hash表大小</span>
<span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span> <span class="token comment">#上传文件大小限制</span>
<span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>
<span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">8m</span></span><span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>

<span class="token comment"># 开启目录列表访问,合适下载服务器,默认关闭.</span>
<span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 显示目录</span>
<span class="token directive"><span class="token keyword">autoindex_exact_size</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 显示文件大小 默认为on,显示出文件的确切大小,单位是bytes 改为off后,显示出文件的大概大小,单位是kB或者MB或者GB</span>
<span class="token directive"><span class="token keyword">autoindex_localtime</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 显示文件时间 默认为off,显示的文件时间为GMT时间 改为on后,显示的文件时间为文件的服务器时间</span>

<span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 开启高效文件传输模式,sendfile指令指定nginx是否调用sendfile函数来输出文件,对于普通应用设为 on,如果用来进行下载等应用磁盘IO重负载应用,可设置为off,以平衡磁盘与网络I/O处理速度,降低系统的负载.注意：如果图片显示不正常把这个改成off.</span>
<span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 防止网络阻塞</span>
<span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 防止网络阻塞</span>

<span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">120</span></span><span class="token punctuation">;</span> <span class="token comment"># (单位s)设置客户端连接保持活动的超时时间,在超过这个时间后服务器会关闭该链接</span>

<span class="token comment"># FastCGI相关参数是为了改善网站的性能：减少资源占用,提高访问速度.下面参数看字面意思都能理解.</span>
<span class="token directive"><span class="token keyword">fastcgi_connect_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_send_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_read_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_buffer_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_temp_file_write_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

<span class="token comment"># gzip模块设置</span>
<span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment">#开启gzip压缩输出</span>
<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span> <span class="token comment">#允许压缩的页面的最小字节数,页面字节数从header偷得content-length中获取.默认是0,不管页面多大都进行压缩.建议设置成大于1k的字节数,小于1k可能会越压越大</span>
<span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span> <span class="token comment">#表示申请4个单位为16k的内存作为压缩结果流缓存,默认值是申请与原始数据大小相同的内存空间来存储gzip压缩结果</span>
<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span> <span class="token comment">#压缩版本（默认1.1,目前大部分浏览器已经支持gzip解压.前端如果是squid2.5请使用1.0）</span>
<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span> <span class="token comment">#压缩等级.1压缩比最小,处理速度快.9压缩比最大,比较消耗cpu资源,处理速度最慢,但是因为压缩比最大,所以包最小,传输速度快</span>
<span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/x-javascript text/css application/xml</span><span class="token punctuation">;</span>
<span class="token comment">#压缩类型,默认就已经包含text/html,所以下面就不用再写了,写上去也不会有问题,但是会有一个warn.</span>
<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span><span class="token comment">#选项可以让前端的缓存服务器缓存经过gzip压缩的页面.例如:用squid缓存经过nginx压缩的数据</span>

<span class="token comment">#开启限制IP连接数的时候需要使用</span>
<span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>

<span class="token comment">##upstream的负载均衡,四种调度算法(下例主讲)##</span>

<span class="token comment">#虚拟主机的配置</span>
<span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
<span class="token comment"># 监听端口</span>
<span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
<span class="token comment"># 域名可以有多个,用空格隔开</span>
<span class="token directive"><span class="token keyword">server_name</span> ably.com</span><span class="token punctuation">;</span>
<span class="token comment"># HTTP 自动跳转 HTTPS</span>
<span class="token directive"><span class="token keyword">rewrite</span> ^(.*) https://<span class="token variable">$server_name</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
<span class="token comment"># 监听端口 HTTPS</span>
<span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server_name</span> ably.com</span><span class="token punctuation">;</span>

<span class="token comment"># 配置域名证书</span>
<span class="token directive"><span class="token keyword">ssl_certificate</span> C:\\WebServer\\Certs\\certificate.crt</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_certificate_key</span> C:\\WebServer\\Certs\\private.key</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:1m</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_protocols</span> SSLv2 SSLv3 TLSv1</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_ciphers</span> ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">index</span> index.html index.htm index.php</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">root</span> /data/www/</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(php|php5)?$</span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">fastcgi_pass</span> 127.0.0.1:9000</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">fastcgi_index</span> index.php</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">include</span> fastcgi.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 配置地址拦截转发，解决跨域验证问题</span>
<span class="token directive"><span class="token keyword">location</span> /oauth/</span><span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">proxy_pass</span> https://localhost:13580/oauth/</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> HOST <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 图片缓存时间设置</span>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">expires</span> <span class="token number">10d</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># JS和CSS缓存时间设置</span>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(js|css)?$</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">expires</span> <span class="token number">1h</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 日志格式设定</span>
<span class="token directive"><span class="token keyword">log_format</span> access <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
<span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
<span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; <span class="token variable">$http_x_forwarded_for</span>&#39;</span></span><span class="token punctuation">;</span>
<span class="token comment"># 定义本虚拟主机的访问日志</span>
<span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access.log access</span><span class="token punctuation">;</span>

<span class="token comment"># 设定查看Nginx状态的地址.StubStatus模块能够获取Nginx自上次启动以来的工作状态，此模块非核心模块，需要在Nginx编译安装时手工指定才能使用</span>
<span class="token directive"><span class="token keyword">location</span> /NginxStatus</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">stub_status</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">auth_basic</span> <span class="token string">&quot;NginxStatus&quot;</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">auth_basic_user_file</span> conf/htpasswd</span><span class="token punctuation">;</span>
<span class="token comment">#htpasswd文件的内容可以用apache提供的htpasswd工具来产生.</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">Nginx多台服务器实现负载均衡：</span>
1.Nginx负载均衡服务器：
IP：192.168.0.4（Nginx-Server）
2.Web服务器列表：
Web1:192.168.0.5（Nginx-Node1/Nginx-Web1） ；Web2:192.168.0.7（Nginx-Node2/Nginx-Web2）
3.实现目的：用户访问Nginx-Server（“http://mongo.demo.com:8888”）时，通过Nginx负载均衡到Web1和Web2服务器
Nginx负载均衡服务器的nginx.conf配置注释如下：
events</span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span>
<span class="token punctuation">{</span>
<span class="token comment">##upstream的负载均衡,四种调度算法##</span>
<span class="token comment">#调度算法1:轮询.每个请求按时间顺序逐一分配到不同的后端服务器,如果后端某台服务器宕机,故障系统被自动剔除,使用户访问不受影响</span>
<span class="token directive"><span class="token keyword">upstream</span> webhost</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.5:6666</span> <span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.7:6666</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#调度算法2:weight(权重).可以根据机器配置定义权重.权重越高被分配到的几率越大</span>
<span class="token directive"><span class="token keyword">upstream</span> webhost</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.5:6666 weight=2</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.7:6666 weight=3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#调度算法3:ip_hash. 每个请求按访问IP的hash结果分配,这样来自同一个IP的访客固定访问一个后端服务器,有效解决了动态网页存在的session共享问题</span>
<span class="token directive"><span class="token keyword">upstream</span> webhost</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.5:6666</span> <span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.7:6666</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#调度算法4:url_hash(需安装第三方插件).此方法按访问url的hash结果来分配请求,使每个url定向到同一个后端服务器,可以进一步提高后端缓存服务器的效率.Nginx本身是不支持url_hash的,如果需要使用这种调度算法,必须安装Nginx 的hash软件包</span>
<span class="token directive"><span class="token keyword">upstream</span> webhost</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.5:6666</span> <span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.7:6666</span> <span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">hash</span> <span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#调度算法5:fair(需安装第三方插件).这是比上面两个更加智能的负载均衡算法.此种算法可以依据页面大小和加载时间长短智能地进行负载均衡,也就是根据后端服务器的响应时间来分配请求,响应时间短的优先分配.Nginx本身是不支持fair的,如果需要使用这种调度算法,必须下载Nginx的upstream_fair模块</span>
<span class="token comment">#</span>
<span class="token comment">#虚拟主机的配置(采用调度算法3:ip_hash)</span>
<span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server_name</span> mongo.demo.com</span><span class="token punctuation">;</span>
<span class="token comment">#对 &quot;/&quot; 启用反向代理</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">proxy_pass</span> http://webhost</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
<span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
<span class="token comment">#以下是一些反向代理的配置,可选.</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">10m</span></span><span class="token punctuation">;</span> <span class="token comment">#允许客户端请求的最大单文件字节数</span>
<span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span> <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数,</span>
<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span> <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span>
<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span> <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span>
<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span> <span class="token comment">#连接成功后,后端服务器响应时间(代理接收超时)</span>
<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">4k</span></span><span class="token punctuation">;</span> <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span> <span class="token comment">#proxy_buffers缓冲区,网页平均在32k以下的设置</span>
<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span> <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
<span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
<span class="token comment">#设定缓存文件夹大小,大于这个值,将从upstream服务器传</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
负载均衡操作演示如下：
操作对象：192.168.0.4（Nginx-Server）

<span class="token comment"># 创建文件夹准备存放配置文件</span>
$ <span class="token directive"><span class="token keyword">mkdir</span> -p /opt/confs
$ vim /opt/confs/nginx.conf

<span class="token comment"># 编辑内容如下：</span>
events</span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">upstream</span> webhost</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.5:6666</span> <span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span> 192.168.0.7:6666</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server_name</span> mongo.demo.com</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">proxy_pass</span> http://webhost</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">4k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 然后保存并退出</span>

<span class="token comment"># 启动负载均衡服务器192.168.0.4（Nginx-Server）</span>
docker run -d -p 8888:80 --name nginx-server -v /opt/confs/nginx.conf:/etc/nginx/nginx.conf --restart always nginx
操作对象：192.168.0.5（Nginx-Node1/Nginx-Web1）
<span class="token comment"># 创建文件夹用于存放web页面</span>
$ mkdir -p /opt/html
$ vim /opt/html/index.html

<span class="token comment"># 编辑内容如下：</span>
&lt;div&gt;
&lt;h1&gt;
The host is 192.168.0.5(Docker02) - Node 1!
&lt;/h1&gt;
&lt;/div&gt;
<span class="token comment"># 然后保存并退出</span>

<span class="token comment"># 启动192.168.0.5（Nginx-Node1/Nginx-Web1）</span>
$ docker run -d -p 6666:80 --name nginx-node1 -v /opt/html:/usr/share/nginx/html --restart always nginx
操作对象：192.168.0.7（Nginx-Node2/Nginx-Web2）
<span class="token comment"># 创建文件夹用于存放web页面</span>
$ mkdir -p /opt/html
$ vim /opt/html/index.html

<span class="token comment"># 编辑内容如下：</span>
&lt;div&gt;
&lt;h1&gt;
The host is 192.168.0.7(Docker03) - Node 2!
&lt;/h1&gt;
&lt;/div&gt;
<span class="token comment"># 然后保存并退出</span>

<span class="token comment"># 启动192.168.0.7（Nginx-Node2/Nginx-Web2）</span>
$ docker run -d -p 6666:80 --name nginx-node2 -v $(pwd)/html:/usr/share/nginx/html --restart always nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h4><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>但是需要注意的是，这个跨域只针对开发模式有效
server: <span class="token punctuation">{</span>
  host: &quot;0.0.0.0&quot;,
  port: viteEnv.VITE_PORT,
  open: viteEnv.VITE_OPEN,
  cors: true,
  // Load proxy configuration from .env.development
  proxy: createProxy(viteEnv.VITE_PROXY)
<span class="token punctuation">}</span>,
一旦打包之后，前端配置的跨域就不起作用了，打包后就必须部署在web服务器上，脱离了 vue的代理配置。
如果是部署在nginx上，反向代理配置如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[p];function c(l,o){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","index.html.vue"]]);export{r as default};

// 모달 관련 JavaScript
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content-area');
const closeButton = document.getElementsByClassName('close-button')[0];

// 프로젝트 상세 정보 객체
const projectDetails = {
    'museum-project': {
        title: 'The Color Line: 색을 넘어선 편견 없는 세상',
        period: '2021.04.05 ~ 2021.06.14',
        description: `
            <h3>프로젝트 개요</h3>
            <p>인종차별을 주제로 한 전시회 기획</p>
            <h3>역할</h3>
            <p>팀장, PPT, 자료조사</p>
            <h3>주요 성과</h3>
            <ul class="list">
                <li>생소한 분야에서도 빠르게 지식을 습득하고 적응</li>
                <li>팀원 간 의견 조율 능력</li>
            </ul>
            <h3>후기</h3>
            <p>대학 생활 첫 팀 프로젝트가 미술 수업에서 시작되었고, 생소한 분야임에도 팀장을 맡게 되었습니다. 처음에는 부담감이 컸지만, 수업을 통해 미술 분야에 대한 이해도를 높이며 흥미를 가지게 되었고, 이는 전시회 기획을 성공적으로 이끄는 원동력이 되었습니다.</p>
            <p>팀장으로서 처음 맡은 회의 진행은 저에게 큰 도전이었습니다. 특히 전시회 주제를 정하는 과정에서 팀원들 간의 의견 차이가 있었지만, 각 주제의 장단점을 체계적으로 분석하고 토론하는 과정을 거쳤습니다. 그 결과 수업의 본질적 가치와 가장 잘 맞닿아 있는 '인권'이라는 주제로 의견을 모을 수 있었습니다.</p>
            <p>프로젝트를 진행하면서 가장 큰 난관은 인종차별을 다루는 전시 공간의 연출이었습니다. 팀원들이 이에 의견을 내지 못하고 있을 때 관람객들이 자신의 모습을 다양한 색으로 비춰보는 거울 설치물을 제안했습니다. 이는 외적인 차이에도 불구하고 그 사람의 본질은 동일하다는 메시지를 전달하고자 한 것이었습니다. 이 아이디어를 계기로 다른 팀원들의 참여도가 높아졌고, 토론이 더욱 활발해지면서 프로젝트의 완성도가 한층 높아질 수 있었습니다.</p>
            <p>이러한 과정들이 모여 최종적으로 A+라는 우수한 성과를 거둘 수 있었습니다. 이 프로젝트는 낯선 영역에서도 빠르게 적응하고 성과를 낼 수 있다는 자신감을 심어주었고, 더불어 기획이라는 분야에 대한 적성과 흥미를 발견하는 소중한 계기가 되었습니다.</p>
        `
    },
    'hobbyist-project': {
        title: '호비스트',
        period: '2021.09.13 ~ 2021.12.13',
        description: `
            <h3>프로젝트 개요</h3>
            <p>서비스 사업 기획 및 피치덱 발표</p>
            <h3>역할</h3>
            <p>팀장, 피치덱 작성, Problem, Solution, Market_size 조사</p>
            <h3>주요 성과</h3>
            <ul class="list">
                <li>시장 조사를 통한 서비스 사업 아이템 발굴</li>
                <li>서비스 기획 및 기능 개선 경험</li>
            </ul>
            <h3>후기</h3>
            <p>기업가정신과행동 수업에서 스타트업 피치덱 작성법을 배우며 시장의 문제점을 발견하고, 이를 해결하기 위한 솔루션을 개발하는 전반적인 과정을 경험했습니다.</p>
            <p>당시 COVID-19로 인해 실내 활동이 제한되면서 취미 생활에 대한 수요가 크게 증가하고 있었습니다. 이러한 시장 상황을 포착하여 취미를 배우고 싶은 사람들과 해당 분야의 전문가를 연결해주는 플랫폼을 기획했고, 이 아이디어로 수업에서 1등이라는 성과를 거둘 수 있었습니다.</p>
            <p>프로젝트에서 시장 분석을 담당하여 여가 플랫폼의 시장 규모를 산정하고, 목표 고객층을 정의했습니다. TAM, SAM, SOM 분석과 함께 SWOT 분석, 경쟁사 분석을 수행하며 시장에 대한 깊이 있는 이해를 할 수 있었습니다. 또한 Figma를 처음 사용해보며 서비스의 프로토타입을 제작하는 과정도 경험했습니다.</p>
            <p>서비스의 핵심 가치를 높이기 위해 사용자 경험에 중점을 두었습니다. 개인의 특성과 성향을 고려한 맞춤형 취미 추천 시스템을 설계했으며, 이는 개인의 개성을 중시하는 현대 사회의 트렌드를 반영한 것이었습니다.</p>
            <p>특히 사용자 간 신뢰 구축을 위해 당근마켓의 '매너온도' 시스템을 벤치마킹했습니다. 처음 만나는 사람들과 취미를 함께하는 서비스의 특성상, 상호 평가 시스템이 필수적이라고 판단했기 때문입니다. 이외에도 리뷰 시스템과 사용자 등급제를 도입하여 서비스의 신뢰도와 재방문율을 높이고자 했습니다.</p>
            <p>수익 모델 설계에도 심혈을 기울였습니다. 앱 서비스의 주요 수익원인 광고와 구독 모델을 분석하고, 사용자 경험을 해치지 않는 범위 내에서 수익을 최적화하는 방안을 모색했습니다. 이 과정에서 예상 수익과 비용을 산정하여 사업성을 검증하는 작업도 진행했습니다.</p>
            <p>이 프로젝트를 통해 서비스 기획의 전 과정을 경험하며, 시장 분석부터 수익 모델 설계까지 서비스 사업의 전반적인 구조를 이해할 수 있었습니다. 특히 사용자 중심의 서비스 설계가 얼마나 중요한지 깊이 깨달을 수 있었던 값진 경험이었습니다.</p>
        `
    },
    'internship': {
        title: '동계 대학생행정체험연수',
        period: '2024.01.04 ~ 2024.01.31',
        description: `
            <h3>주요 업무</h3>
            <ul class="list">
                <li>도서 책 정리</li>
                <li>웹툰 창작 프로그램 페이지 관리</li>
            </ul>
            <h3>후기</h3>
            <p>동계 대학생행정체험연수를 통해 도서관에서 한 달간 근무하며 소중한 경험을 쌓을 수 있었습니다. 새로운 업무환경에도 적극적인 태도로 임했고, 이러한 모습을 직원분들께 긍정적인 평가를 받았습니다. 덕분에 업무에 빠르게 적응할 수 있었고, 팀원들과도 원활한 관계를 형성할 수 있었습니다.</p>
            <p>업무에 익숙해질 무렵, 저의 커리어 방향성에 대해 깊이 고민하게 되었습니다. 제가 맡은 업무는 대부분 정해진 매뉴얼에 따라 진행되는 정적인 성격이 강했습니다. 물론 행정체험연수 프로그램의 특성상 제한적인 업무를 맡게 된 것이지만, 전반적인 업무 환경이 새로운 시도나 변화를 추구하기 어려운 구조였습니다.</p>
            <p>특히 인상 깊었던 것은 조직 문화였습니다. 적절한 보상 체계의 부재로 인해 직원들의 업무 의욕이 저하되어 있었고, 오히려 적극성을 보이는 것에 대해 부정적인 시선이 존재했습니다. 이러한 경험을 통해 조직 문화가 구성원들의 업무 태도와 성과에 미치는 영향을 체감할 수 있었습니다.</p>
            <p>이번 경험은 제가 어떤 환경에서 일하고 싶은지, 어떤 직무가 제 적성에 맞는지 판단하는 중요한 계기가 되었습니다. 반복적이고 정적인 업무보다는 지속적으로 학습하고 새로운 가치를 창출하는 직무가 저와 더 잘 맞는다는 것을 깨달았습니다. 이러한 측면에서 서비스 기획 직무야말로 제가 추구하는 방향과 가장 잘 부합한다고 확신하게 되었습니다.</p>
        `
    },
    'corp-report': {
        title: '(주)클래시스 기업분석',
        period: '2024.04.01 ~ 2024.04.15',
        description: `
            <h3>프로젝트 개요</h3>
            <p>클래시스의 산업, 기업, 전망 분석 및 가치평가</p>
            <h3>주요 성과</h3>
            <ul class="list">
                <li>마이클 포터의 5가지 경쟁요인 분석을 통한 산업환경분석 경험</li>
                <li>재무비율 분석 경험</li>
                <li>현금흐름할인모형(DCF), EVA 등의 모형을 활용하여 전망분석 및 가치평가 경험</li>
            </ul>
            <h3>후기</h3>
            <p>이 프로젝트를 통해 실제로 엑셀로 5년치 재무제표를 깔끔하게 정리하고 보고서로 내용을 분석하는 경험을 해봤습니다.</p>
            <p>기업을 평가할 때는 재무성과뿐만 아니라 산업의 변화와 소비자 트렌드를 함께 고려해야 한다는 것을 배웠습니다. 클래시스의 경우 재무지표는 양호했지만, 가정용 미용기기 시장의 성장이라는 산업 변화가 기업에 미칠 영향을 파악하는 것이 중요했습니다.</p>
            <p>데이터를 해석할 때는 표면적인 수치보다 그 이면의 맥락을 이해하는 것이 중요하다는 것을 배웠습니다. 예를 들어 높은 현금보유율이 반드시 긍정적인 지표가 아닐 수 있으며, 기업의 전략과 시장 상황을 고려한 해석이 필요했습니다.</p>
            <p>제품만이 아니라 서비스의 지속가능성을 평가하기 위해서는 다양한 관점의 분석이 필요하다는 점을 배웠고 재무비율, 산업구조, 소비자 니즈 변화 등을 종합적으로 분석함으로써 더 정확한 기업 가치와 미래 전망을 도출할 수 있다는 것을 알 수 있었습니다.</p>
        `
    },
    'stalk': {
        title: '주식 커뮤니티 Stalk',
        period: '2024.08.26 ~ 2024.09.02',
        description: `
            <h3>프로젝트 개요</h3>
            <p>Django 프레임워크로 주식 커뮤니티 기획 및 개발</p>
            <h3>역할</h3>
            <p>기획 Django 풀스택 개발, 문서(readme) 작성</p>
            <h3>주요 성과</h3>
            <ul class="list">
                <li>기존 서비스의 약점을 분석하고 기획 아이디어 도출</li>
                <li>비지니스 로직 및 개발 효율성에 대한 이해</li>
                <li>Django CBV 개발, Django templates로 프론트 개발 경험</li>
            </ul>
            <h3>후기</h3>
            <p>처음으로 Django를 활용하여 기획부터 개발까지 전 과정을 경험했습니다. 평소 관심이 있던 주식 관련 서비스를 주제로 선정하여 프로젝트를 시작했습니다.</p>
            <p>자산관리 서비스에 대한 경험과 시장 조사를 통해 흥미로운 인사이트를 발견했습니다. 대부분의 핀테크 서비스들이 다양한 기능을 제공함에도 불구하고 MAU(월간 활성 사용자) 지표가 낮다는 점에 주목했습니다. 특히 '뱅크샐러드' 앱의 사용자 평균 월 사용 빈도가 1회에 그친다는 데이터를 접했습니다. 반면 주식 관련 앱들은 상대적으로 높은 사용 빈도를 보였는데, 이는 자산의 변동성이 클수록 사용자들의 관심도가 높아진다는 것을 시사했습니다.</p>
            <p>이러한 분석을 바탕으로, 자산관리 서비스에 주식 포트폴리오 관리 기능을 접목하면 사용자 참여도를 높일 수 있다고 판단했습니다. 다만 프로젝트 요구사항이 Blog 형식의 CRUD 기능 구현이었기에, 네이버증권의 주식 토론방을 벤치마킹하여 개별 주식 정보와 토론 공간, 그리고 포트폴리오 목록을 결합한 서비스를 계획했습니다.</p>
            <p>체계적인 개발을 위해 기능명세서 작성, DB 설계, WBS 수립, 와이어프레임 제작을 거쳐 URL 구조를 설계했고, CBV(Class-Based Views) 방식으로 개발을 진행했습니다.</p>
            <p>개발 과정에서 첫 번째 기술적 과제는 주식 데이터 연동이었습니다. 이전에 yfinance와 pandas 라이브러리를 활용한 주식 차트 분석 경험을 살려 데이터 처리 방식을 결정했습니다.</p>
            <p>그러나 yfinance가 주식 티커 기반으로 작동한다는 점이 사용자 경험 측면에서 문제가 되었습니다. 초기에는 ChatGPT API를 활용해 주식명을 티커로 변환하는 방식을 고려했으나, 비용 효율성 측면에서 부적절하다는 피드백을 받았습니다. 결과적으로 주식 티커 데이터베이스를 직접 구축하는 방식으로 전환하여 문제를 해결했습니다.</p>
            <p>개발 과정에서 특히 중점을 둔 것은 비즈니스 로직의 최적화였습니다. 사용자 관점에서 블로그 기능을 핵심으로 두고, 이를 중심으로 서비스를 구축했습니다.</p>
            <p>한 주 동안의 짧은 개발 기간으로 인해 웹소켓을 활용한 실시간 채팅이나 포트폴리오 관리 기능 등 추가 기능을 구현하지 못한 아쉬움이 있습니다. 특히 실시간 주식 토론 채팅방 기능은 게시글 형식보다 더 효과적인 사용자 경험을 제공했을 것이라 생각됩니다.</p>
            <p>이 프로젝트는 Django를 활용한 첫 개발 경험이었지만, 기획한 기능을 실제로 구현하고 어떻게 하면 비용 효율적으로 기능 구현할 수 있을 지, 또 사용자 관점에서 더 나은 서비스가 무엇이고 어떻게 개선해야 할 지 고민해본 소중한 경험이었습니다.</p>
        `
    },
    'gamgyul-house': {
        title: '감귤하우스',
        period: '2024.09.20 ~ 2024.10.14',
        description: `
            <h3>프로젝트 개요</h3>
            <p>Django 프레임워크로 주식 커뮤니티 기획 및 개발</p>
            <h3>역할</h3>
            <p>팀장, 백엔드(accounts, recommendation, follow, profiles, reports, search), 프론트엔드, 배포</p>
            <h3>주요 성과</h3>
            <ul class="list">
                <li>전체적인 회의 진행, 회의록 작성, 팀 일정 관리, DB 설계 및 관리 경험</li>
                <li>팀 프로젝트 컨벤션 작성 및 개발 경험</li>
                <li>기능 명세서 작성 및 DRF로 API 개발 및 문서화 작업</li>
                <li>javascript fetch로 API 받아와 프론트엔드 개발 경험</li>
                <li>기획부터 개발, 그리고 AWS EC2로 배포까지 경험</li>
            </ul>
            <h3>후기</h3>
            <p>프로젝트의 팀장으로서 회의 진행부터 회의록 작성, 팀 진행 상황 보고까지 전반적인 관리를 담당했습니다. 팀원 모두가 협업 경험이 없었기에, 기본적인 개발 컨벤션부터 협업 방식까지 차근차근 토론하며 정립해 나갔습니다. 역할 분배, 기능 명세서 작성, 기술 스택 선정을 거쳐 일정 계획과 DB 설계까지 체계적으로 진행했습니다.</p>
            <p>개발 경험이 부족한 상황에서 여러 기술적 난관에 부딪혔습니다. 특히 초기에 발생한 데이터베이스 문제가 큰 도전이었습니다. User 모델 커스터마이징 과정에서 팀원 간 소통 부족으로 마이그레이션 순서가 꼬여 데이터베이스를 다시 구축해야 했습니다. 이 문제는 Docker-compose를 도입하여 각자의 로컬 환경에서 독립적으로 데이터베이스를 관리하는 방식으로 해결했습니다.</p>
            <p>프로젝트 초기에는 WBS(Work Breakdown Structure)의 필요성을 깊이 이해하지 못했습니다. 하지만 실제 개발을 진행하면서, 특히 Accounts 앱과 JWT 인증 기능을 구현하며 작업 간의 의존성을 체감했습니다. 이를 통해 작업의 선후관계와 종속성을 고려한 일정 관리 및 적절한 인원 투입의 중요성을 깨달았습니다.</p>
            <p>시간 제약이 가장 큰 도전 요소였습니다. 팀원의 건강 악화로 인한 일정 차질, 그리고 핵심 비즈니스 로직인 posts 기능보다 부가 기능(채팅, 계정 관리, 마켓 기능 등)에 치중하면서 일정이 지연되는 문제가 발생했습니다. 이 경험을 통해 두 가지 중요한 교훈을 얻었습니다. 첫째, 핵심 비즈니스 로직의 우선순위화의 중요성, 둘째, 팀장으로서 팀원들의 상황을 빠르게 파악하고 유연하게 대응하는 능력의 필요성입니다.</p>
            <p>기술적인 면에서는 사용자 편의성을 높이기 위해 allauth를 활용한 구글 소셜 로그인을 구현했습니다. 또한 팔로우 시스템 구현 과정에서 발생한 데이터 조회 로직의 문제를 해결했습니다. 구체적으로는 following_id를 먼저 조회한 후 해당하는 follower_id를 찾는 방식으로 개선하여 정확한 팔로워 정보를 표시할 수 있게 되었습니다.</p>
            <p>비록 모든 계획했던 기능을 기한 내에 구현하지는 못했지만, 팀원들과 함께 야근과 주말 근무를 마다하지 않고 열정적으로 프로젝트에 임했습니다. 백엔드 배포는 성공했으나 프론트엔드 배포까지는 완료하지 못한 아쉬움이 있습니다. 그러나 공식적인 프로젝트 기간이 끝난 후에도 팀원들과 함께 모여 리팩토링과 배포 작업을 이어갔다는 점에서 우리 팀원들의 끈기와 책임감을 보여주는 좋은 사례라고 생각하고 있습니다. 서비스가 완성될 때까지 책임지고 끝까지 완수하는 이러한 태도야말로 진정한 서비스 기획자의 핵심 자질을 갖췄다고 생각합니다.</p>
        `
    },
    'education': {
        title: '모두연_오름캠프 벡엔드 Django 2기',
        period: '2024-06-17 ~ 2024-10-14',
        description: `
            <h3>교육 내용</h3>
            <ul class="list">
                <li>Python 기초부터 심화 학습</li>
                <li>Django 프레임워크 학습</li>
                <li>REST API 설계 및 구현</li>
                <li>데이터베이스, 통신(HTTP), AWS, HTML, CSS, Javascript 학습</li>
                <li>다양한 AI 활용 경험</li>
                <li>실전 팀 프로젝트 수행</li>
            </ul>
            <h3>후기</h3>
            <p>이 교육과정을 통해 파이썬 기초부터 심화, Django 웹 프레임워크, SQL, HTML, CSS, JavaScript, 네트워크 통신 등 웹 서비스 개발에 필요한 전반적인 기술을 습득했습니다. 이러한 학습을 통해 서비스 기획부터 DB 설계, 백엔드/프론트엔드 개발, 배포까지 아우르는 종합적인 시각을 갖출 수 있었습니다.</p>
            <p>기존에 경제, 금융, 회계 분야에 집중되어 있던 지식 영역을 IT 분야로 확장하면서, 두 영역을 융합적으로 바라볼 수 있는 시야를 갖게 되었습니다. 특히 AI 기술을 효과적으로 활용하는 방법을 익히면서 큰 성장을 경험했습니다. 적절한 프롬프트 엔지니어링을 통해 프로젝트 효율성을 높일 수 있었고, 이는 의왕시 사업 기획 공모전 준비 과정에서 특히 빛을 발했습니다.</p>
            <p>세 차례의 프로젝트를 거치며 기술적 역량뿐만 아니라 실무적 역량도 크게 향상되었습니다. 특히 다른 팀들의 발표와 기술 블로그를 통해 Jira와 Github을 연동한 이슈 관리, 효과적인 일정 관리, 체계적인 기능 명세서 작성, DB 설계 등 실제 서비스 기획에 필수적인 도구들의 활용법을 익혔습니다.</p>
            <p>매일 오전 9시부터 오후 6시까지의 수업과 이어지는 자율 학습을 통해, 4개월이라는 짧은 기간 동안 놀라운 성장을 이뤄냈습니다. 이 과정을 성공적으로 완주한 것은 저에게 큰 자부심이 되었고, 앞으로 경제/회계 지식과 IT 기술을 접목한 서비스 기획자로 성장하겠다는 확고한 목표를 세우게 된 결정적인 계기가 되었습니다.</p>
        `
    },
    'planning': {
        title: '제품 관리자와 서비스 기획자를 위한 실전 노하우',
        period: '2024-10-23 ~ ',
        description: `
            <h3>교육 내용</h3>
            <ul class="list">
                <li></li>
            </ul>
            <h3>후기</h3>
            <p></p>
        `
    }
};

// 타임라인 링크 클릭 이벤트 처리
document.querySelectorAll('.timeline-content a').forEach(link => {
    // href가 .html로 끝나는 링크만 모달 처리
    if (link.getAttribute('href').endsWith('.html')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('href').replace('.html', '');
            const project = projectDetails[projectId];
            
            if (project) {
                modalContent.innerHTML = `
                    <h2>${project.title}</h2>
                    <p><strong>기간:</strong> ${project.period}</p>
                    ${project.description}
                `;
                modal.style.display = 'block';
            }
        });
    }
});

// 모달 닫기 버튼 이벤트
closeButton.onclick = function() {
    modal.style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

import './style.css'
import workplannerIcon from './assets/workplanner_icon.png'
import workplannerLogo from './assets/workplanner_logo.png'
import workplannerLogoInline from './assets/workplanner_logo_inline.png'
import workplannerLogoInlineWhite from './assets/workplanner_logo_inline_white.png'

// Screenshots
import mainScreen from './assets/main_screen.png'
import Dashboard from './assets/dashboard.png'
import EventForm from './assets/eventform.png'
import Staff from './assets/staff.png'



import analyticsIcon from './assets/analytics-icon.svg'
import calendarIcon from './assets/calendar-icon.svg'
import statsIcon from './assets/stats-icon.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="${workplannerLogoInline}" alt="WorkPlanner Icon" />
      </div>
      <nav class="nav">
        <a href="#features">Возможности</a>
        <a href="#how-it-works">Как работает</a>
        <a href="#details">Подробнее</a>
      </nav>
      <button class="cta-button btn primary" ig="getContact">Хочу попробовать</button>
    </div>
  </header>

  <main>
    <section class="hero" id="demo">
      <div class="container">
        <div class="hero-content">
          <h1>Планируйте рабочее время вместе с WorkPlanner</h1>
          <p class="hero-subtitle">
            WorkPlanner — это корпоративный планировщик задач с подробной статистикой и модулем учета сотрудников
          </p>
          <div class="hero-buttons">
            <button class="btn secondary">Пробная версия</button>
          </div>
          <div class="stats">
            <div class="stat">
              <div class="stat-number">3</div>
              <div class="stat-label">Основных модуля</div>
            </div>
            <div class="stat">
              <div class="stat-number">до 1500</div>
              <div class="stat-label">Пользователей в системе</div>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <div class="dashboard-preview">
            <div class="preview-header">
              <div class="preview-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="preview-content">
                <div class="screenshot" id="screenshot">
                  <img src="${mainScreen}" alt="Main screen" class="screenshot-img" />
                  <div class="zoom-indicator">🔍 Увеличить</div>
                </div>
                <div class="task completed">✓ Контроль над задачами</div>
                <div class="task active">✓ Анализ активности</div>
                <div class="task process">✓ Планирование нагрузки</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Модальное окно для увеличенного изображения -->
    <div class="modal-overlay" id="imageModal">
      <div class="modal-content">
        <button class="modal-close" id="closeModal">&times;</button>
        <img src="" alt="Увеличенное изображение" class="modal-image" id="modalImage" />
        <div class="modal-caption" id="modalCaption"></div>
      </div>
    </div>
    
    <!-- Модальное окно для показа контактов 
    <div class="modal-overlay" id="contactModal">
      <div class="modal-content">
        <button class="modal-close" id="closeContactModal">&times;</button>
        <h4>Связаться с разработчиком</h4>
        <div>Антон Цатуровю. почта an@mail.com телефон 8933474747</div>
      </div>
    </div>-->

    <!-- Модальное окно для показа контактов -->
    <div class="modal-overlay" id="contactModal">
      <div class="modal-content">
        <button class="modal-close" id="closeContactModal">&times;</button>
        
        <div class="contact-modal-header">
          <h3>Связаться с разработчиком</h3>
          <p>Задайте вопросы и обсудите сотрудничество</p>
        </div>


        <div class="contact-info">
        
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Разработчик</span>
              <span class="contact-value">Антон Цатуров</span>
            </div>
          </div>
        
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Email</span>
              <a href="mailto:info@workplanner.ru" class="contact-value">info@workplanner.ru</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Телефон</span>
              <a href="tel:+7933474747" class="contact-value">+7 (911) 787-35-28</a>
            </div>
          </div>

        </div>

        <div class="contact-actions">
          <button class="btn primary" onclick="window.open('mailto:info@workplanner.ru')">
            Написать письмо
          </button>
          <button class="btn outline" onclick="window.open('tel:+79117873528')">
            Позвонить
          </button>
        </div>
      </div>
    </div>

    <section id="features" class="features">
      <div class="container">
        <h2>Мощные возможности для вашей продуктивности</h2>
        <div class="features-grid">
        
          <div class="feature-card">
            <div class="feature-icon">
              <img src="${EventForm}" alt="Планирование" class="zoomable"/>
              <div class="zoom-indicator">🔍 Нажмите для увеличения</div>
            </div>
            <h3>Простое планирование</h3>
            <p>Автоматическое загрузка ваших задач с учетом вашей профессиональной деятельности</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon" >
              <img src="${Dashboard}" alt="Аналитика" class="zoomable"/>
              <div class="zoom-indicator">🔍 Нажмите для увеличения</div>
            </div>
            <h3>Детальная аналитика</h3>
            <p>Наглядные отчеты о продуктивности команды, рабочей нагрузке, распределении ресурсов и рабочего времени</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <img src="${Staff}" alt="Персонал" class="zoomable"/>
            </div>
            <h3>Персонал</h3>
            <p>Вся информация о ваших коллегах в одном месте с удобным поиском </p>
          </div>
          
        </div>
      </div>
    </section>

    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <h2>WorkPlanner - ваш незаменимый ассистент</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Добавляйте задачи</h3>
            <p>Внесите ваши задачи и дополнительные параметры</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Следите за статистикой</h3>
            <p>WorkPlanner автоматически сделает необходимые расчеты</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Анализируйте результаты</h3>
            <p>Отслеживайте статистику, планируйте деятельность и управляйте результатом</p>
          </div>
        </div>
      </div>
    </section>

    <section id="details" class="details">
      <div class="container">
        <h2>Подробнее о WorkPlanner</h2>
        <div class="details-cards">

          <div class="details-card">
            <ul class="features-list">
              <li> Задачи, подзадачи, список отделов и статистика настриваются индивидуально для каждой организации </li>
              <li> Выделенный субдомен company.workplanner.ru </li>
              <li> Предельный лимит до 1500 сотрудников</li>
              <li> Современный технологический стек </li>
              <li> Регулярные бэкапы и обновления  </li>
              <li> Техническая поддержка со стороны разработчика</li>
            </ul>
          </div>
          

        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Готовы использовать возможности WorkPlanner?</h2>
        <p>Присоединяйтесь!</p>
        <button class="btn primary large">Связаться с разработчиком</button>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-section-center">
            <div class="logo-big">
              <img src="${workplannerLogoInlineWhite}" alt="WorkPlanner Logo" />
            </div>
          </div>
        </div>
        <div class="footer-section">
          <h4>Продукт</h4>
          <a href="#features">Возможности</a>
          <a href="#details">Подробнее</a>
          <a href="#demo">Пробная версия</a>
        </div>
        <div class="footer-section">
          <h4>Разработчик</h4>
          <a href="#">Контакты</a>
        </div>
        <div class="footer-section">
          <h4>Поддержка</h4>
          <a href="#">Помощь</a>
          <a href="#">Документация</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024-2025 WorkPlanner. Все права защищены.</p>
      </div>
    </div>
  </footer>
`

// Инициализация плавной прокрутки для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href')!)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Обработчик для кнопок CTA
document.querySelectorAll('.btn.primary').forEach(button => {
  button.addEventListener('click', () => {
    openContactModal()
    //alert('Добро пожаловать в WorkPlanner! Регистрация откроется в ближайшее время.')
  })
  
})

// Функционал увеличения изображения
const screenshot = document.getElementById('screenshot')!
const imageModal = document.getElementById('imageModal')!

const contactModal = document.getElementById('contactModal')!

const closeModal = document.getElementById('closeModal')!
const closeContactModal = document.getElementById('closeContactModal')!
const modalImage = document.getElementById('modalImage') as HTMLImageElement
const modalCaption = document.getElementById('modalCaption')!

// Функция для открытия модального окна с любым изображением
function openModal(imageSrc: string, caption: string = '') {
  modalImage.src = imageSrc
  modalImage.alt = caption || 'Увеличенное изображение'
  modalCaption.textContent = caption
  
  imageModal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function openContactModal() {
  contactModal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

// Функция для закрытия модального окна
function closeModalFunc() {
  console.log(contactModal.classList)
  imageModal.classList[1] === 'active' ? imageModal.classList.remove('active') : contactModal.classList.remove('active')
  document.body.style.overflow = ''
}

// Открытие модального окна для главного скриншота
screenshot.addEventListener('click', () => {
  openModal(mainScreen, 'Главный экран WorkPlanner')
})

// Закрытие модального окна
closeModal.addEventListener('click', closeModalFunc)
closeContactModal.addEventListener('click', closeModalFunc)

// Закрытие по клику на оверлей
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    closeModalFunc()
  }
})

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal.classList.contains('active')) {
    closeModalFunc()
  }
})

// Пример использования для других изображений:
// Если у вас есть несколько скриншотов, можно добавить:
const otherScreenshots = document.querySelectorAll('.other-screenshot')
otherScreenshots.forEach(screenshot => {
  screenshot.addEventListener('click', () => {
    const imgSrc = screenshot.getAttribute('data-image')!
    const caption = screenshot.getAttribute('data-caption') || ''
    openModal(imgSrc, caption)
  })
})

// Универсальный обработчик для всех изображений с классом .zoomable
document.addEventListener('DOMContentLoaded', () => {
  const zoomableImages = document.querySelectorAll('.zoomable')
  
  zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement
      const imgElement = target.querySelector('img') || target as HTMLImageElement
      const caption = target.getAttribute('data-caption') || imgElement.alt
      
      openModal(imgElement.src, caption)
    })
  })
})

const demoButton = document.querySelector('.btn.secondary') as HTMLButtonElement
if (demoButton) {
  demoButton.addEventListener('click', () => {
    window.open('https://app.workplanner.ru', '_blank')
  })
}
